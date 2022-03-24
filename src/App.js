import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Confetti from "react-confetti";

const thankMsgs = [
  "oh ok",
  "hey thanks!",
  "ay ayyyy",
  "do these actually do anything?",
  "why are we on this earth?",
  "my favorite vegetable is the mushroom きのこ btw",
  "por que hice esta pagina?",
  "im actually supposed to be working",
  "yessss",
  "keep them coming baby",
  "yes ill take another one",
  "ma'am this is a wendy's",
  "try our mobile app!",
  "have you seen Inside on netflix?",
  "send this on line if you get it: 'Andres eres un bobo'",
  "i dont know how many of these I can write",
  "I have a fidget spinner at work cause I'm cool, dont be jealous",
  "I think my favorite fruit is mango... but idk tbh",
  "actually these dont save...",
  "now funded by amazon! thanks bezos!",
  "youre still here?",
  "I can be pretty cringey sometimes",
  "alright im getting tired of writing these",
  "the order they appear is random btw",
];

function App() {
  const [andyPoints, setAndyPoints] = useState(
    Number(window.localStorage.getItem("andyPoints")) ?? 0
  );
  const [thank, setThank] = useState("");

  const handleClick = () => {
    console.log("andyPoints", andyPoints);
    setAndyPoints((prev) => prev + 1);
    setThank(thankMsgs[Math.floor(Math.random(0, thankMsgs.length - 1) * 11)]);
    window.localStorage.setItem("andyPoints", andyPoints + 1);
  };

  return (
    <div className="App-header">
      <Confetti />
      <header className="App-header">
        <h1>Andy Points: {andyPoints}</h1>
        <div style={{ padding: 10 }}>{thank}</div>

        <button onClick={handleClick}>add andy points pls</button>
        {andyPoints > 15 && andyPoints < 50 && (
          <h3 style={{ padding: 40 }}>
            huh you actually went past 10, やるじゃん
          </h3>
        )}
        {andyPoints >= 50 && andyPoints < 100 && (
          <h3 style={{ padding: 40 }}>
            oh wow ok so you really are going hard on this huh, apparently the
            max is 300...
          </h3>
        )}
        {andyPoints >= 100 && andyPoints < 150 && (
          <h3 style={{ padding: 40 }}>
            ok I need to be honest, these points dont ACTUALLY save
          </h3>
        )}
        {andyPoints >= 150 && andyPoints < 200 && (
          <h3 style={{ padding: 40 }}>
            oh god she's still doing it... someone help
          </h3>
        )}
        {andyPoints >= 200 && andyPoints < 230 && (
          <h3 style={{ padding: 40 }}>
            you know I can kind of really respect the fact that you got this
            far, in a kind of scared way
          </h3>
        )}
        {andyPoints >= 230 && andyPoints < 250 && (
          <h3 style={{ padding: 40 }}>
            day 406, she's still there just tapping the button looking at me
            menacingly
          </h3>
        )}
        {andyPoints >= 250 && andyPoints < 300 && (
          <h3 style={{ padding: 40 }}>
            ok so im getting tired of writing these lol
          </h3>
        )}
        {andyPoints >= 300 && andyPoints < 350 && (
          <h3 style={{ padding: 40 }}>
            To be able to be oneself without filters is what I consider true
            happiness. I've said this before and I'll say it again, you are
            special. Because of that I want to make sure that you feel just as
            special as you are. If this thing we have going on goes up in
            flames, it'll be sad but know that I am so incredibly grateful I
            could at least feel this great.. and if it doesent go up in flames,
            then lets light some houses on fire together... im somewhat of a
            pyromaniac, but dont worry its a healthy amount of pyromaniac, not
            really out there "get help" level pyromaniac.
            <br />
            <br />
            Anyway, this is the last message, I doubt you got this far, but if
            you did let me know, or dont, there's literally no way I can know
            since these points are stored locally on your computer. And for the
            love of god, no there are no hacks or viruses here, im not as good
            as you think I am, most I can do is put a spinning poop and stupid
            messages...
            <br />
            <br />
            <br />
            Alright take care
          </h3>
        )}
        {andyPoints >= 350 && andyPoints < 450 && (
          <h3 style={{ padding: 40 }}>
            Ok um, I uh I said that was the last one... why are you still
            going?! Theres literally nothing else! seriously!! Alright, youll
            get to 450 and see no change and realize you wasted your time
            clicking
          </h3>
        )}
        {andyPoints >= 451 && andyPoints < 500 && (
          <h3 style={{ padding: 40 }}>
            holy shit tell IRL andy that you got this far cause mf needs to run,
            his life is in danger
          </h3>
        )}
        <p className="App-logo">💩</p>
      </header>
    </div>
  );
}

export default App;
