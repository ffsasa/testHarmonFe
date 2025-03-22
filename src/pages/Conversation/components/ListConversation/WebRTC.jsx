import { useEffect, useRef, useState } from 'react';
import hubConnection, { startConnection, acceptCall } from '../../../../services/HubConnection';
import { startWebRTC, configureWebRTC } from '../../../../services/webRTC'; // Import thêm configureWebRTC
import PhoneIcon from '@mui/icons-material/Phone';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function WebRTC() {
  const [incomingCaller, setIncomingCaller] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeCall, setActiveCall] = useState(false);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    const initConnection = async () => {
      await startConnection();
      try {
        await hubConnection.invoke('GetRandomUser');
      } catch (err) {
        console.error('❌ Lỗi khi gọi GetRandomUser:', err);
      }
    };

    initConnection();

    const handleIncomingCall = (callerId) => {
      console.log('📞 Incoming call from:', callerId);
      setIncomingCaller(callerId);
    };
    hubConnection.on('IncomingCall', handleIncomingCall);

    const handleRandomUserSelected = (targetConnectionId) => {
      console.log('🔍 Random user selected:', targetConnectionId);
      setSelectedUser(targetConnectionId);
    };
    hubConnection.on('RandomUserSelected', handleRandomUserSelected);

    const handleNoAvailableUsers = () => {
      console.log('❌ No available users');
      setSelectedUser(null);
    };
    hubConnection.on('NoAvailableUsers', handleNoAvailableUsers);

    const handleCallAccepted = (partnerId) => {
      console.log('✅ Call accepted with:', partnerId);
      setActiveCall(true);
      setSelectedUser(null);
    };
    hubConnection.on('CallAccepted', handleCallAccepted);

    const handleCallEnded = () => {
      console.log('📴 Cuộc gọi đã kết thúc');
      if (peerConnection.current) {
        peerConnection.current.close();
        peerConnection.current = null;
      }
      setIncomingCaller(null);
      setSelectedUser(null);
      setActiveCall(false);
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
      if (localVideoRef.current) localVideoRef.current.srcObject = null;
    };
    hubConnection.on('CallEnded', handleCallEnded);

    // Cấu hình WebRTC với peerConnection
    configureWebRTC(peerConnection.current);

    return () => {
      hubConnection.off('IncomingCall', handleIncomingCall);
      hubConnection.off('RandomUserSelected', handleRandomUserSelected);
      hubConnection.off('NoAvailableUsers', handleNoAvailableUsers);
      hubConnection.off('CallEnded', handleCallEnded);
      hubConnection.off('ReceiveOffer');
      hubConnection.off('ReceiveAnswer');
    };
  }, []);

  const setupPeerConnection = () => {
    if (!peerConnection.current) {
      peerConnection.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate && (selectedUser || incomingCaller)) {
          const targetId = selectedUser || incomingCaller;
          hubConnection.invoke("SendCandidate", targetId, JSON.stringify(event.candidate));
        }
      };
      peerConnection.current.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };
    }
    return peerConnection.current;
  };

  const startCall = async () => {
    if (!selectedUser) return;
    const pc = setupPeerConnection();
    const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
    if (localVideoRef.current) localVideoRef.current.srcObject = stream;
    await startWebRTC(pc, selectedUser);
    hubConnection.invoke("StartCall", selectedUser);
  };

  const acceptIncomingCall = async () => {
    if (!incomingCaller) return;
    const pc = setupPeerConnection();
    const stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
    if (localVideoRef.current) localVideoRef.current.srcObject = stream;
    acceptCall(incomingCaller);
    setIncomingCaller(null);
  };

  const rejectIncomingCall = async () => {
    if (incomingCaller) {
      await hubConnection.invoke('RejectCall', incomingCaller);
      setIncomingCaller(null);
      setSelectedUser(null);
      setActiveCall(false);
      await hubConnection.invoke('GetRandomUser');
    }
  };

  const endCall = async () => {
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
    setIncomingCaller(null);
    setSelectedUser(null);
    setActiveCall(false);
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
    if (localVideoRef.current) localVideoRef.current.srcObject = null;
    await hubConnection.invoke('EndCall');
    await hubConnection.invoke('GetRandomUser');
  };

  const reloadSelectedUser = async () => {
    await hubConnection.invoke('GetRandomUser');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <h1>WebRTC CallHub</h1>
      {/* Phần JSX giữ nguyên như code của bạn */}
      {(selectedUser || incomingCaller) && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '100px',
          }}
        >
          {incomingCaller ? (
            <div
              style={{
                padding: '10px',
                background: '#d0f0d0',
                marginBottom: '10px',
                width: '100%',
                borderRadius: '10px',
              }}
            >
              <strong>Cuộc gọi đến từ: {incomingCaller}</strong>
            </div>
          ) : (
            <div
              style={{
                padding: '10px',
                background: '#d0f0d0',
                marginBottom: '10px',
                width: '100%',
                borderRadius: '10px',
              }}
            >
              <strong>Người dùng được chọn để gọi: {selectedUser}</strong>
            </div>
          )}
          {!incomingCaller && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1976d2',
                padding: '8px',
                borderRadius: '100%',
                marginTop: '10px',
                marginBottom: '15px',
                cursor: 'pointer',
              }}
              onClick={reloadSelectedUser}
            >
              <RefreshIcon sx={{ color: 'white' }} />
            </div>
          )}
          <img
            src="https://images.unsplash.com/photo-1520547704200-8bbf59077512?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              gap: '10px',
              textAlign: 'left',
              width: '100%',
              borderRadius: '10px',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            <p style={{ fontWeight: 'bold', fontSize: '25px', margin: 0 }}>
              Antony
            </p>
            <p style={{ fontSize: '16px', margin: 0, color: 'grey' }}>26</p>
          </div>
          <div
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '10px',
              color: 'grey',
            }}
          >
            <p style={{ margin: 0, marginBottom: '5px' }}>
              New York University
            </p>
            <p style={{ margin: 0, marginBottom: '5px' }}>12 miles away</p>
          </div>
          <p
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '15px',
              margin: 0,
            }}
          >
            Successful, driven, and always chasing meaningful connections. 💼✨
            I'm a man who thrives on ambition but believes true happiness lies
            in the moments shared with someone special. From deep conversations
            to spontaneous adventures, I value quality time and genuine
            connections. ❤️ Looking for a partner to create unforgettable
            memories with—if you’re into romance, good vibes, and real talks,
            let’s see where this goes.
          </p>
          {!incomingCaller && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                padding: '8px',
                borderRadius: '100%',
                marginTop: '25px',
                marginBottom: '15px',
                cursor: 'pointer',
              }}
              onClick={startCall}
            >
              <div>
                <PhoneIcon sx={{ color: 'white' }} />
              </div>
            </div>
          )}
          <div>
            {incomingCaller && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'orange',
                    padding: '8px',
                    borderRadius: '100%',
                    marginTop: '25px',
                    marginBottom: '15px',
                    cursor: 'pointer',
                  }}
                  onClick={rejectIncomingCall}
                >
                  <div>
                    <CloseIcon sx={{ color: 'white' }} />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'violet',
                    padding: '8px',
                    borderRadius: '100%',
                    marginTop: '25px',
                    marginBottom: '15px',
                    cursor: 'pointer',
                  }}
                  onClick={acceptIncomingCall}
                >
                  <div>
                    <CheckIcon sx={{ color: 'white' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <>
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          style={{ width: '0' }}
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          style={{ width: '0' }}
        />
      </>
      {activeCall && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                padding: '10px',
                background: '#e0d0f0',
                marginBottom: '10px',
                width: '100%',
                borderRadius: '10px',
              }}
            >
              <strong>Cuộc gọi đang hoạt động</strong>
            </div>
            <img
              src="https://images.unsplash.com/photo-1520547704200-8bbf59077512?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '10px',
                textAlign: 'left',
                width: '100%',
                borderRadius: '10px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left',
                width: '100%',
                marginBottom: '10px',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '25px',
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                Antony
              </p>
              <p
                style={{
                  fontSize: '16px',
                  margin: 0,
                  marginBottom: 0,
                  marginTop: 0,
                  color: 'grey',
                }}
              >
                26
              </p>
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: '10px',
                color: 'grey',
              }}
            >
              <p style={{ margin: 0, marginBottom: '5px' }}>
                New York University
              </p>
              <p style={{ margin: 0, marginBottom: '5px' }}>12 miles away</p>
            </div>
            <p
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: '15px',
                margin: 0,
              }}
            >
              Successful, driven, and always chasing meaningful connections.
              💼✨ I'm a man who thrives on ambition but believes true happiness
              lies in the moments shared with someone special. From deep
              conversations to spontaneous adventures, I value quality time and
              genuine connections. ❤️ Looking for a partner to create
              unforgettable memories with—if you’re into romance, good vibes,
              and real talks, let’s see where this goes.
            </p>
            {activeCall && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                  padding: '8px',
                  borderRadius: '100%',
                  marginTop: '25px',
                  marginBottom: '15px',
                  cursor: 'pointer',
                }}
                onClick={endCall}
              >
                <div>
                  <CloseIcon sx={{ color: 'white' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}