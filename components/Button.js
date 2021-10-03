export default function Button(props) {
  return (
    <button
      {...props}
      className={
        "py-2 px-3 rounded-lg " +
        (props.disabled
          ? "bg-gray-700 cursor-not-allowed "
          : "bg-blue-800 hover:bg-blue-900 text-gray-300 rounded-md " +
            props.className)
      }
    />
  );
}
