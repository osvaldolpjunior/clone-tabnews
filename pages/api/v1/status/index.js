function status(request, response) {
  response.status(200).json({ status: "working as expected 🚀..." });
}

export default status;
