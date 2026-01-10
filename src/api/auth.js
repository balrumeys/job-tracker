export function fakeLoginApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "123456") {
        resolve({ success: true });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}
