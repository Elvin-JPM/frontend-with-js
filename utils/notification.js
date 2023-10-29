"use strict";

export const notification = (content) => {
  const notificationContent = document.createElement("div");

  notificationContent.className =
    content.type === "Error"
      ? "notification notification-error"
      : "notification notification-success";

  notificationContent.innerHTML = `
        <h3>${content.type}</h3>
        <p>${content.message}</p>
    `;
  return notificationContent;
};
