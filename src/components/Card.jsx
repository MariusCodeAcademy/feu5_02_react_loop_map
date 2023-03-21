function Card(props) {
  console.log('props ===', props);
  // props === {item: {}, size: 'lg'}
  return (
    <div>
      <h2>{props.item?.title}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
export default Card;
