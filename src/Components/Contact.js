const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4">Contact Us</h1>
      <form>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-solid border-black rounded-lg m-2 p-2 w-md"
          />
          <input
            type="text"
            placeholder="Enter your message"
            className="border-2 border-solid border-black rounded-lg m-2 p-2 w-md"
          />
          <button className="bg-amber-300 border-2 border-solid border-black rounded-lg m-2 p-2 w-17">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
