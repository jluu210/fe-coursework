class Student {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.weight = 1;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class ClassRoom {
  constructor() {
    this.students = [];
    this.nameList = document.querySelector("#nameList");
    this.selectedStudentId = null;
  }

  async fetchStudents() {
    const response = await fetch(
      "https://javascript-capstone-backend.onrender.com/users"
    );

    if (!response.ok) {
      throw new Error(`Could not load students (${response.status})`);
    }

    const data = await response.json();

    // Turn each API record into a Student object.
    this.students = data.map(
      (student) =>
        new Student(student.id, student.first_name, student.last_name)
    );
  }

  async showRandomNames() {}

  renderSidebar() {
    this.nameList.replaceChildren();

    if (this.students.length === 0) {
      const message = document.createElement("li");
      message.textContent = "No students.";
      this.nameList.append(message);
      return;
    }

    for (const student of this.students) {
      const row = document.createElement("li");

      const name = document.createElement("span");
      name.textContent = student.getName() + " : ";

      const weight = document.createElement("span");
      weight.textContent = `Weight = ${student.weight}`;

      const controls = document.createElement("div");
      controls.className = "squares";

      const minusButton = document.createElement("button");
      minusButton.type = "button";
      minusButton.textContent = "−";
      minusButton.setAttribute(
        "aria-label",
        `Decrease ${student.getName()} weight`
      );
      minusButton.dataset.action = "decrease";
      minusButton.dataset.id = student.id;

      const plusButton = document.createElement("button");
      plusButton.type = "button";
      plusButton.textContent = "+";
      plusButton.setAttribute(
        "aria-label",
        `Increase ${student.getName()} weight`
      );
      plusButton.dataset.action = "increase";
      plusButton.dataset.id = student.id;

      controls.append(minusButton, plusButton);
      row.append(name, weight, controls);
      this.nameList.append(row);
      if (student.id === this.selectedStudentId) {
        row.classList.add("selected");
      }
    }
  }

  changeWeight(id, amount) {
    const student = this.students.find((student) => student.id === id);

    if (student) {
      // Keep weights from going below zero.
      student.weight = Math.max(0, student.weight + amount);
      this.renderSidebar();
    }
  }

  getRandomStudent() {
    const totalWeight = this.students.reduce(
      (total, student) => total + student.weight,
      0
    );

    // wait for weights to come in during fetch
    if (totalWeight <= 0) return null;

    let roll = Math.random() * totalWeight;

    for (const student of this.students) {
      roll -= student.weight;
      if (roll < 0) return student;
    }

    return null;
  }

  handlePickButton() {
    const button = document.querySelector("#pickButton");
    const result = document.querySelector("#result");

    button.addEventListener("click", async () => {
      const winner = this.getRandomStudent();

      if (!winner) {
        result.textContent = "All Students Weights cannot be Zero";
        return;
      }

      button.disabled = true;

      // Show several weighted picks, slowing down each time.
      for (let i = 0; i < 18; i++) {
        const preview = this.getRandomStudent();
        if (preview) {
          result.textContent = `${preview.getName()}!`;
          this.selectedStudentId = preview.id;
          this.renderSidebar();
        }

        const delay = 40 + i * 12;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      // Finish on the winner selected at the start.
      this.selectedStudentId = winner.id;
      result.textContent = `${winner.getName()}!`;
      this.renderSidebar();
      const winnerRow = this.nameList.querySelector("li.selected");
      winnerRow?.classList.add("winner-flash");
      button.disabled = false;
    });
  }

  async start() {
    this.nameList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;

      const id = Number(button.dataset.id);
      const amount = button.dataset.action === "increase" ? 1 : -1;
      this.changeWeight(id, amount);
    });

    this.handlePickButton();

    try {
      await this.fetchStudents();
      this.renderSidebar();
    } catch (error) {
      console.error(error);
      this.nameList.innerHTML = "<li>Could not load students.</li>";
    }
  }
}

const classroom = new ClassRoom();
classroom.start();
