import { css } from 'lit-element';

const typingStyles = css`
.typing-pad p {
  border-right: .15em solid orange;
  font-family: "Courier";
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
}
.typing-pad p:nth-child(1) {
  width: 23em;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typing-pad p:nth-child(2) {
  width: 25em;
  opacity: 0;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typing-pad p:nth-child(3) {
  width: 32em;
  opacity: 0;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typing-pad p:nth-child(4) {
  width: 35em;
  opacity: 0;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-delay: 12s;
  animation-delay: 12s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typing-pad p:nth-child(5) {
  width: 30em;
  opacity: 0;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-delay: 16s;
  animation-delay: 16s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.typing-pad p:nth-child(6) {
  width: 27em;
  opacity: 0;
  -webkit-animation: typing 4s steps(40, end);
  animation: typing 4s steps(40, end);
  -webkit-animation-delay: 20s;
  animation-delay: 20s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}




@keyframes typing {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes typing {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}


@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: tranparent;
  }
}
`;

export default typingStyles;