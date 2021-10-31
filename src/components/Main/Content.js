import Card from "./Card";

const Content = () => {
  return (
    <main className="container mx-auto mt-11 h-4/6">
      <div className="w-full mx-auto h-full grid grid-cols-5 grid-rows-5 gap-3">
        <Card
          classes={{
            div: "from-red-300 to-red-700 col-span-3 row-span-3",
            button: "bg-red-500 active:bg-red-700",
          }}
          link="/todo"
          btnText="Explore Now"
          pText="A simple client side todo app which will use browser local
          storage to save data."
        />
        <Card
          classes={{
            div: "from-green-300 to-green-700 row-span-2 col-span-2",
            button: "bg-green-500 active:bg-green-700",
          }}
          link="/"
          btnText="upcoming"
          pText="Upcoming event"
        />
        <Card
          classes={{
            div: "from-purple-300 to-purple-700 col-span-2 md:row-span-3 ",
            button: "bg-purple-500 active:bg-purple-700",
          }}
          link="/"
          btnText="upcoming"
          pText="Upcoming event"
        />
        <Card
          classes={{
            div: "from-yellow-300 to-yellow-700 row-span-2 col-span-2",
            button: "bg-yellow-500 active:bg-yellow-700",
          }}
          link="/"
          btnText="upcoming"
          pText="Upcoming event"
        />

        <Card
          classes={{
            div: "from-pink-300 to-pink-700 row-span-2 md:row-span-2 col-span-3 md:col-span-1",
            button: "bg-pink-500 active:bg-pink-700",
          }}
          link="/"
          btnText="upcoming"
          pText="Upcoming event"
        />
      </div>
    </main>
  );
};

export default Content;
