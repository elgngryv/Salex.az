import React from "react";

const MessagesUser = () => {
  const messages = [
    {
      id: 0,
      name: "Elgün",
      surname: "Qarayev",
      email: "elgun@example.com",
      phoneNumber: "+994551112233",
      message: "Salam, mənim mesajım budur.",
    },
    {
      id: 1,
      name: "Nigar",
      surname: "Məmmədova",
      email: "nigar@example.com",
      phoneNumber: "+994556667788",
      message: "Test üçün ikinci mesaj.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">İstifadəçi Mesajları</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Ad</th>
              <th className="p-3 border-b">Soyad</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Telefon</th>
              <th className="p-3 border-b">Mesaj</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  Mesaj yoxdur
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{msg.id}</td>
                  <td className="p-3 border-b">{msg.name}</td>
                  <td className="p-3 border-b">{msg.surname}</td>
                  <td className="p-3 border-b">{msg.email}</td>
                  <td className="p-3 border-b">{msg.phoneNumber}</td>
                  <td className="p-3 border-b">{msg.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessagesUser;
