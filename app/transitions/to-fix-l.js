import moveOver from 'liquid-fire/transitions/move-over';

export default function (opts) {
  return moveOver.call(this, 'x', -1, opts).then((result) => {
    const transition = this;

    transition.newElement[0].style.transform = '';

    return result;
  });
}
