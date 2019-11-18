import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import data from "../Data/race";

//Look into style components for display/not displaying certain aspects of the page.

const Randomization = () => {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [npcJob, setNpcJob] = useState("");
  // *** DATA ARRAYS FOR NOW ***
  const races = ["Dwarf", "Human", "Gnome"];
  const characterClasses = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
  ];
  const npcCityJobs = [
    "General store keeper",
    "Tavern/Inn keeper",
    "Guard",
    "Sherriff/Guard captain/constable",
    "Magistrate",
    "Master of Ceremony",
    "Food vendors/Merchant",
    "Pawn shop owner",
    "Magic merchant (rare)",
    "Teleportation circle steward",
    "Arboretum (arborist)",
    "Botanical Gardener",
    "Lyceum scholar/instructor",
    "Coliseum gladiator/slaver",
    "Fighting pit ringmaster",
    "Clay mason",
    "Stone mason",
    "Printer",
    "Carpenter/wood worker",
    "Apothecary/pharmacist",
    "Alchemist",
    "Butcher",
    "Smoke shop tobacconist",
    "Baker",
    "Candlestick maker",
    "Fletcher",
    "Bowyer",
    "Seamstress/tailor",
    "Smith (tin [white], silver, black)",
    "Ferrier",
    "Furrier",
    "Jeweler",
    "Trapper",
    "Falconer",
    "Tanner",
    "Herdsmen/Shepard",
    "Farmer(s market) grocers, fishmongers",
    "Cartographer",
    "Librarian",
    "Book Store clerk",
    "Printer",
    "Florist (cart)",
    "Menagerie/zoo keeper/Animal Handler",
    "Miner (silver/gold/copper/iron/coal)",
    "Slave",
    "Serf",
    "Artisan",
    "Painter",
    "Pottery mason",
    "Priest",
    "Madhouse caretakers",
    "Petty nobility/mayor",
    "Knight",
    "Baron",
    "Count",
    "Duke",
    "Monarch/Emperor",
    "Council member",
    "Cooper",
    "Gongfarmer",
    "Cobbler (shoes)",
    "Glass blower",
    "Courier/messenger",
    "Stablehand",
    "Doctor/Plaguedoctor",
    "Midwife",
    "Brewer",
    "Winemaker",
    "Barber",
    "Street Cleaners",
    "Chimney Sweeps",
    "Maids/butlers",
    "Lawyer",
    "Academic/scribe",
    "Diviner/Oracle",
    "Beggar",
    "Town crier",
    "Grave digger",
    "Wainwright",
    "Caravansary/traveling merchant",
    "Dock worker/sailor",
    "Shipwright",
    "Guild master/member",
    "Grange foreman",
    "Spinster",
    "Bathhouse/hot springs worker",
    "Thatchers/roofers",
    "Lumber mill worker",
    "Wheelwright",
    "Millwright",
    "Banker",
    "Veterinary",
    "Prostitute/harlot",
    "Washer",
    "Water bearers",
    "Criminal, theif, lookout",
    "Armorer",
    "Street sweeper",
    "Carriage driver",
    "Gambler",
    "Lamp lighter",
    "Lumberjack",
    "Ratter",
    "Dyer",
    "Rope maker",
    "Sail maker",
    "Cultist",
    "Tax collector",
    "Orphanage caretaker",
    "Advisors/sages",
    "Philosophers",
    "Soldiers/generals",
    "Priest/cleric",
    "Squire",
    "Soap maker",
    "Parchment maker",
    "Jailer",
    "Bailiff",
    "Lector",
    "Mudlark/scavenger",
    "Stable master/head groom"
  ];
  const humanNames = [
    "harry",
    "howard",
    "hen",
    "hay",
    "heff",
    "hugh",
    "hubert"
  ];
  const gnomeNames = [
    "garry",
    "greg",
    "gobert",
    "gilbert",
    "gnomey",
    "gnard",
    "gnar",
    "gerrard"
  ];
  const merchantWares = ["Grain", "Wine", "Herbs", "Produce", "Antiques"];

  //Name isnt' updating until another change - need to look into this later to change
  const randomName = () => {
    switch (race) {
      case "Human":
        setName(humanNames[Math.floor(Math.random() * humanNames.length)]);
        break;
      case "Gnome":
        setName(gnomeNames[Math.floor(Math.random() * gnomeNames.length)]);
        break;
      default:
        setName("My Name is Jeff");
        break;
    }
  };

  function randomPlayerCharacter() {
    setRace(races[Math.floor(Math.random() * races.length)]);
    setCharacterClass(
      characterClasses[Math.floor(Math.random() * characterClasses.length)]
    );
  }

  function saveHero() {
    db.collection("Hero").add({ race: race, heroClass: characterClass });
  }

  function randomNpcCharacter() {
    randomName();
    setRace(races[Math.floor(Math.random() * races.length)]);
    setNpcJob(npcCityJobs[Math.floor(Math.random() * npcCityJobs.length)]);
  }

  function saveNpc() {
    db.collection("Npc").add({
      name: name,
      race: race,
      job: npcJob
    });
  }

  const handleRaceChange = event => {
    setRace(event.target.value);
  };
  const handleJobChange = event => {
    setNpcJob(event.target.value);
  };

  // useEffect(() => )

  return (
    <div>
      <div>
        <h1>5e Hero/Character creation Tool</h1>
        <button onClick={randomPlayerCharacter}>
          Click me to Create a Hero Character
        </button>
      </div>
      <div id="heroCreation">
        <div>{race}</div>
        <div>{characterClass}</div>
      </div>
      <button onClick={saveHero}>Save Hero</button>
      <div id="npcCreation">
        <h1>5e NPC Character Creation</h1>
        <button onClick={randomNpcCharacter}>Click me to Create NPC</button>
        <input type="text" value={name} onChange={randomName} />
        <input type="text" value={race} onChange={handleRaceChange} />
        <input type="text" value={npcJob} onChange={handleJobChange} />
        <button onClick={saveNpc}>Save NPC</button>
      </div>
    </div>
  );
};

export default Randomization;
