/* ===== Skill Section Styling ===== */
.skills {
  padding: 60px 20px;
  background-color: #000; /* Black background */
  color: gold; /* Gold text */
}

.skill {
  margin: 20px 0;
}

.skill p {
  font-weight: 600;
  margin-bottom: 8px;
  color: gold;
}

/* Skill bar container */
.skill-bar {
  width: 100%;
  background-color: rgba(255, 215, 0, 0.2); /* Transparent gold background */
  border-radius: 25px;
  overflow: hidden;
  height: 25px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
}

/* Skill bar fill */
.skill-bar span {
  display: block;
  height: 100%;
  width: 0; /* initial width */
  background: linear-gradient(90deg, gold, #ffd700);
  border-radius: 25px;
  transition: width 1.5s ease-in-out;
  box-shadow: 0 2px 6px rgba(255, 215, 0, 0.7);
}
