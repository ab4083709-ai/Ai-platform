// Agent Configuration
const agents = [
    { name: "Topic Research", icon: "fa-magnifying-glass", status: "Waiting" },
    { name: "Script Writer", icon: "fa-pen-nib", status: "Waiting" },
    { name: "Image Gen", icon: "fa-image", status: "Waiting" },
    { name: "Video Composer", icon: "fa-film", status: "Waiting" }
];

// Initialize UI
window.onload = () => {
    const grid = document.getElementById('agentGrid');
    agents.forEach(a => {
        grid.innerHTML += `
            <div class="agent-card" id="agent-${a.name.replace(/\s+/g, '')}">
                <i class="fas ${a.icon} fa-2x" style="color: var(--accent)"></i>
                <h4 style="margin-top:15px">${a.name}</h4>
                <p class="status-text">${a.status}</p>
                <div class="progress-bar" style="height:4px; background:#1a1a1a; margin-top:10px; border-radius:5px">
                    <div class="fill" style="width:0%; height:100%; background:var(--accent); transition:1s"></div>
                </div>
            </div>
        `;
    });
};

// Section Toggler (Admin vs Production)
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    
    document.getElementById(sectionName + '-section').classList.add('active');
    event.currentTarget.classList.add('active');
}

// Start Production Simulation
function startProduction() {
    const topic = document.getElementById('topicInput').value;
    if(!topic) return alert("Please enter a topic!");

    addLog("Initializing Master Pipeline for: " + topic, "info");
    
    // Simulate Agent Progress
    agents.forEach((agent, index) => {
        setTimeout(() => {
            const card = document.getElementById(`agent-${agent.name.replace(/\s+/g, '')}`);
            card.querySelector('.fill').style.width = "100%";
            card.querySelector('.status-text').innerText = "Completed";
            card.querySelector('.status-text').style.color = "#00ff88";
            addLog(`Agent ${index + 1}: ${agent.name} finished successfully.`, "success");
        }, (index + 1) * 2000);
    });
}

function addLog(msg, type) {
    const term = document.getElementById('terminalLogs');
    const p = document.createElement('p');
    p.className = 'log-' + type;
    p.innerText = `> [${new Date().toLocaleTimeString()}] ${msg}`;
    term.appendChild(p);
    term.scrollTop = term.scrollHeight;
              }
