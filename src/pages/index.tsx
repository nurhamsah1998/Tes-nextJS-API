import React from "react";
import supabase from "./supabase";
import { motion } from "framer-motion";

function Index() {
  const [user, setUser] = React.useState("");
  const [data, setData] = React.useState([]);

  const GetData = async () => {
    await fetch("/api/user-list")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  console.log(data);

  React.useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <input
            value={user}
            onChange={(i: React.ChangeEvent<HTMLInputElement>) =>
              setUser(i.target.value)
            }
            placeholder="Nama user"
          />
          <button
            onClick={async () => {
              const body: any = {
                id: 8,
                name: user,
              };
              await fetch("/api/user-list", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-Type": "Application/json",
                },
              })
                .then((res) => {
                  GetData();
                })
                .catch((error) => {
                  alert("Gagal");
                });
            }}
          >
            Kirim
          </button>
        </div>
        <div>
          {data?.map((i: any) => (
            <p key={i?.id}>{i?.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  let { data, error } = await supabase.from("test").select("*");

  // Pass data to the page via props
  return { props: { data } };
}

{
  /* <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
{Array(6)
  .fill(1)
  .map((item: any, index: any) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        scale: 0.5,
        boxShadow: "2px 2px 2px #000",
      }}
      animate={{ opacity: 1, scale: 1, rotate: -90 }}
      transition={{
        duration: 0.8,
        delay: 0.5 + index,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        style={{
          backgroundColor: "red",
          height: "200px",
          width: "200px",
        }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
    </motion.div>
  ))}
</div> */
}
