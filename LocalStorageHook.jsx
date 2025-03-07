import { useLocalStorage } from "./assets/hooks";
export function UseLocalStorageHook() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");
  const [secondName,setSecondName] = useLocalStorage("Second_Name","")
  
  const [hobbies,setHobbies] = useLocalStorage("Hobbies", ["Programming ,Coding"])
  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br /><br />
        <label htmlFor="">Second Name</label>
        <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
       <div>{hobbies}</div>
       <button onClick={()=>{
        setHobbies(currHobbies => [...currHobbies,"New HObby"])
       }}>Add Hobbies</button>

      
      
      </div>
    </>
  );
}
