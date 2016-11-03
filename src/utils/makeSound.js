// window.audioContext = window.audioContext || new AudioContext();
//
// export default function makeSound(waveform, frequency, duration) {
//   const oscillator = audioContext.createOscillator();
//
//   oscillator.type = waveform || 'sine';
//   oscillator.frequency.value = frequency || 300;
//
//   oscillator.connect(audioContext.destination);
//
//   oscillator.start();
//   duration = duration || 500;
//   window.setTimeout(oscillator.stop.bind(oscillator), duration);
// }
