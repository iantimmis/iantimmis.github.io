function TechStack() {
  return (
    <div className="mx-auto grid gap-3 grid-cols-1 grid-rows-5 max-w-lg">
      <Layer bg="bg-yellow-200">Machine Learning / Data Science</Layer>
      <div className="grid gap-4 grid-cols-3">
        <Layer bg="bg-blue-200">Frontend</Layer>
        <Layer bg="bg-red-200">Mobile</Layer>
        <Layer bg="bg-indigo-200">Games</Layer>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <Layer bg="bg-green-200">Backend</Layer>
        <Layer bg="bg-yellow-200">Data</Layer>
      </div>
      <Layer bg="bg-gray-200">Software Libraries</Layer>
      <div className="grid gap-4 grid-cols-2">
        <Layer bg="bg-pink-200">Hardware</Layer>
        <Layer bg="bg-purple-200">Emulation</Layer>
      </div>
    </div>
  )
}

// function Layer(props) {
//   return (
//     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
//      <div className="text-xl font-medium text-black">{props.children}</div>
//     </div>
//   );
// }

function Layer(props) {
  return (
    // max-w-sm mx-auto
    <div className={`${props.bg} rounded text-center shadow-md p-3.5`}>
      {props.children}
    </div>
  );
}

export default TechStack;
