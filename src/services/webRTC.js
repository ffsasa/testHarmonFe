import hubConnection from "./HubConnection";

export const startWebRTC = async (peerConnection, remoteConnectionId) => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  await hubConnection.invoke(
    "SendOffer",
    remoteConnectionId,
    JSON.stringify(offer)
  );
};

hubConnection.on("ReceiveOffer", async (callerId, offer) => {
  const peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });

  await peerConnection.setRemoteDescription(
    new RTCSessionDescription(JSON.parse(offer))
  );
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  await hubConnection.invoke("SendAnswer", callerId, JSON.stringify(answer));
});

hubConnection.on("ReceiveAnswer", async (callerId, answer) => {
  await peerConnection.setRemoteDescription(
    new RTCSessionDescription(JSON.parse(answer))
  );
});