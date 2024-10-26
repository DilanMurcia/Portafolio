const canvas = document.getElementById('neuralNetwork');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];
const numNodes = 100; // Aumentar el número de nodos para más estrellas.
let focalLength = canvas.width / 2; // Determina la perspectiva.

const getColors = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    return {
        background: isDarkMode ? 'black' : 'white',
        nodeColor: isDarkMode ? 'white' : 'black',
        lineColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    };
};

class Node {
    constructor() {
        // Aumentar el área de aparición para hacerla más amplia
        this.x = Math.random() * 800 - 400; // Cambiado para mayor área.
        this.y = Math.random() * 800 - 400;
        this.z = Math.random() * 400 - 200;
        this.vz = Math.random() * 0.5 + 0.1; // Velocidad hacia la cámara.
        this.size = Math.random() * 2 + 1; // Tamaño variable de las "estrellas".
    }

    update() {
        this.z -= this.vz; // Movimiento hacia la cámara.
        if (this.z < -focalLength) {
            this.z = Math.random() * 400 - 200; // Reiniciar nodo al fondo.
        }
    }

    draw() {
        const scale = focalLength / (focalLength + this.z); // Escala por profundidad.
        const x2D = (this.x * scale) + canvas.width / 2;
        const y2D = (this.y * scale) + canvas.height / 2;

        // Dibujar una estrella
        ctx.beginPath();
        ctx.moveTo(x2D, y2D - this.size); // Parte superior de la estrella
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(x2D + this.size * Math.sin((i * 2 * Math.PI) / 5), y2D - this.size * Math.cos((i * 2 * Math.PI) / 5));
            ctx.lineTo(x2D + (this.size / 2) * Math.sin(((i + 1) * 2 * Math.PI) / 5), y2D - (this.size / 2) * Math.cos(((i + 1) * 2 * Math.PI) / 5));
        }
        ctx.closePath();
        ctx.fillStyle = getColors().nodeColor; // Usar el color de nodo según el modo.
        ctx.fill();
    }
}

// Crear los nodos.
for (let i = 0; i < numNodes; i++) {
    nodes.push(new Node());
}

// Conectar nodos cercanos.
function connectNodes() {
    const lineColor = getColors().lineColor; // Usar el color de línea según el modo.
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dz = nodes[i].z - nodes[j].z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < 80) { // Aumentar la distancia para conectar más nodos.
                const scale = focalLength / (focalLength + nodes[i].z);
                ctx.beginPath();
                ctx.moveTo(
                    (nodes[i].x * scale) + canvas.width / 2,
                    (nodes[i].y * scale) + canvas.height / 2
                );
                ctx.lineTo(
                    (nodes[j].x * scale) + canvas.width / 2,
                    (nodes[j].y * scale) + canvas.height / 2
                );
                ctx.strokeStyle = lineColor; // Usar el color de línea.
                ctx.lineWidth = 0.5; // Grosor de las líneas.
                ctx.stroke();
            }
        }
    }
}

// Animación continua.
function animate() {
    const { background } = getColors(); // Obtener el color de fondo.
    ctx.fillStyle = background; // Establecer el color de fondo.
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas con el color de fondo.

    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    connectNodes();
    requestAnimationFrame(animate);
}

// Ajustar canvas al cambiar el tamaño de ventana.
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    focalLength = canvas.width / 2;
});

// Ejecutar la animación.
animate();
