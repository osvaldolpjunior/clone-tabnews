test("GET to /api/status/v1 should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");
});
