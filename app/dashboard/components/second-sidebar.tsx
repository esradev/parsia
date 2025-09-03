import React from "react";

export const SecondSidebar = () => {
  // Dummy user data for demonstration
  const user = {
    name: "John Doe",
    email: "john@example.com",
    credits: 120,
    avatar: "/placeholder-user.jpg",
    plan: "Pro",
    joined: "Jan 2023",
    location: "New York, USA",
    notifications: 3,
  };

  return (
    <aside className="w-72 bg-gradient-to-b from-muted to-background border-l flex flex-col items-center py-8 px-6 shadow-lg rounded-xl min-h-screen">
      <div className="relative mb-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-primary shadow-lg"
        />
        {user.notifications > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
            {user.notifications}
          </span>
        )}
      </div>
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded mb-4">
        {user.plan} Plan
      </span>
      <div className="bg-background rounded-lg p-4 shadow mb-4 w-full text-center flex flex-col items-center">
        <span className="font-bold text-2xl">{user.credits}</span>
        <span className="block text-xs text-muted-foreground">Credits</span>
        <button className="mt-2 text-xs text-primary underline">
          Buy more
        </button>
      </div>
      <div className="w-full mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Joined</span>
          <span>{user.joined}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Location</span>
          <span>{user.location}</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 mb-6">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary/90 transition">
          Manage Account
        </button>
        <button className="bg-background border px-4 py-2 rounded shadow hover:bg-muted transition text-muted-foreground">
          Settings
        </button>
        <button className="bg-background border px-4 py-2 rounded shadow hover:bg-destructive/10 transition text-destructive">
          Logout
        </button>
      </div>
      <footer className="mt-auto text-xs text-muted-foreground text-center w-full">
        &copy; 2024 YourApp. All rights reserved.
      </footer>
    </aside>
  );
};
