// ฟังก์ชันเพิ่ม To-Do ใหม่ลงในหน้า
function addTodo(text) {
}

// ฟังก์ชันบันทึก To-Do ลงใน cookie
function saveTodos() {
  const list = document.getElementById("ft_list");
  const todos = [];

  // เก็บข้อความ To-Do ทุกตัวในอาร์เรย์
  for (let i = 0; i < list.children.length; i++) {
    todos.push(list.children[i].textContent);
  }

  // แปลงเป็นข้อความ JSON และเก็บใน cookie
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

// ฟังก์ชันโหลด To-Do จาก cookie
function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    if (cookie.startsWith("todos=")) {
      const value = cookie.split("=")[1];
      try {
        const todos = JSON.parse(decodeURIComponent(value));
        todos.forEach(todoText => addTodo(todoText));
      } catch (e) {
        console.error("Error loading todos from cookie", e);
      }
    }
  }
}

// เมื่อกดปุ่ม New ให้เปิด prompt รับข้อความ แล้วเพิ่ม To-Do
document.getElementById("new-btn").addEventListener("click", () => {
  const text = prompt("พิมพ์รายการที่ต้องการทำ:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
  }
});

// โหลด To-Do เมื่อเปิดหน้าเว็บ
window.onload = loadTodos;
