const Contact = () => {
  return (
    <div
      name="contact"
      className="full-screen bg-color-primary center container-mobile "
    >
      <form
        method="POST"
        action="https://getform.io/f/cdd0744b-df0c-45df-bb65-41f1e2968034"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-color-secondary">
            Contact
          </p>
          <p className="pb-4 pt-6">
            Please don't be hesitated to contact me if you have any questions
          </p>
        </div>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 input-field"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="input-field"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-color-secondary hover:border-color-secondary px-4 py-3 my-8 mx-auto flex items-center rounded"
        >
          Let's connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
