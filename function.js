:root {
    --bg-color: #f4f6f9;
    --text-color: #1e293b;
    --accent-color: #2563eb;

    --rojo: #dc1a1a;
    --rosa: #d83fa0;
    --naranja: #e67e22;
    --azul: #164dcd;
    --cafe: #3a2f1f;
    --verde: #2ddf2a;
    --amarillo: #e2ee3f;
    --morado: #7209b7;
}
body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    padding: 2rem;
    transition: background-color 0.4s ease;
}
header {
    text-align: center;
    margin-bottom: 25px;
}
#btn_cambio {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 25px;
    transition: transform 0.3s ease;
}

#btn_cambio:hover {
    transform: scale(1.05);
}
.padre {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
}
.aa {
    height: 10rem;
    width: 20%;
    min-width: 120px;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: bold;
    color: white;

    cursor: pointer;
    transition: all 0.4s ease;
}
.rojo {
    background-color: var(--rojo);
}

.rosa {
    background-color: var(--rosa);
}

.naranja {
    background-color: var(--naranja);
}

.azul {
    background-color: var(--azul);
}

.cafe {
    background-color: var(--cafe);
}

.verde {
    background-color: var(--verde);
}

.amarillo {
    background-color: var(--amarillo);
    color: #222;
}

.morado {
    background-color: var(--morado);
}
.aa:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 18px #00000040;
}
.padre.cambio #div1 {
    background-color: #06d6a0;
    color: #102a24;
}

.padre.cambio #div2 {
    background-color: #118ab2;
}

.padre.cambio #div3 {
    background-color: #073b4c;
}

.padre.cambio #div4 {
    background-color: #ffbe0b;
    color: #222;
}

.padre.cambio #div5 {
    background-color: #8338ec;
}

.padre.cambio #div6 {
    background-color: #fb5607;
}

.padre.cambio #div7 {
    background-color: #3a86ff;
    color: white;
}

.padre.cambio #div8 {
    background-color: #ff006e;
}
@media screen and (max-width: 768px) {
    body {
        padding: 1rem;
    }

    .aa {
        width: 40%;
    }
}
@media screen and (max-width: 480px) {
    .padre {
        flex-direction: column;
        align-items: center;
    }

    .aa {
        width: 90%;
        height: 8rem;
    }

    header h1 {
        font-size: 1.5rem;
    }

    #btn_cambio {
        width: 100%;
    }
}
