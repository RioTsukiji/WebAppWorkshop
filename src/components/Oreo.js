export default function Oreo(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{props.count}</h2>
      <button
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
