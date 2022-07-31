const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-color-primary flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/cdd0744b-df0c-45df-bb65-41f1e2968034"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-color-secondary text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pb-4 pt-6">
            Please don't be hesitated to contact me if you have any questions
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-color-secondary hover:border-color-secondary px-4 py-3 my-8 mx-auto flex items-center rounded">
          Let's connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
