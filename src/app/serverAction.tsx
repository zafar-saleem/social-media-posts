"use server";

export const serverAction = async (prevState, data) => {
  if (!data.get("full_name")) return { error: true, type: "full_name", message: "Fullname is required", };
  
  return { error: false, message: `Thank you ${data.get("full_name")}.` };
}
