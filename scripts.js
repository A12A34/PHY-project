// Utility: Get numeric value from an input element
const getValue = id => {
    const value = document.getElementById(id).value;
    return value !== "" ? parseFloat(value) : 0;
};

// Utility: Show result with a pulse animation effect
const showResult = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
    element.style.animation = "pulse 0.5s ease";
};

// Forces in Equilibrium Calculation
document.getElementById('checkEquilibriumBtn').addEventListener('click', () => {
    const P = getValue('eqP');
    const Q = getValue('eqQ');
    const angle = getValue('eqAngle');
    const weight = getValue('eqW');

    const angleRad = angle * Math.PI / 180;
    const resultantForce = Math.sqrt(P ** 2 + Q ** 2 + 2 * P * Q * Math.cos(angleRad));
    const equilibriumStatus = Math.abs(resultantForce - weight) < 0.01 ? 'In Equilibrium' : 'Not in Equilibrium';
    const mass = weight / 9.8;

    showResult('resultEquilibrium', equilibriumStatus);
    showResult('EqulibriumResultantForce', resultantForce.toFixed(4));
    showResult('resultMass', mass.toFixed(4));
});

// Resultant Force Calculation
document.getElementById('calcForceBtn').addEventListener('click', () => {
    const P = getValue('p');
    const Q = getValue('q');
    const angle = getValue('angle');
    const angleRad = angle * Math.PI / 180;

    const magnitude = Math.sqrt(P ** 2 + Q ** 2 + 2 * P * Q * Math.cos(angleRad));
    const direction = Math.atan2(Q * Math.sin(angleRad), P + Q * Math.cos(angleRad)) * (180 / Math.PI);

    showResult('resultForce', magnitude.toFixed(4));
    showResult('resultDirection', direction.toFixed(4));
});

// Resultant Force from 3 Forces Calculation
document.getElementById('calc3ForcesBtn').addEventListener('click', () => {
    const F1 = getValue('F1'), F2 = getValue('F2'), F3 = getValue('F3');
    const angle1 = getValue('angle1'), angle2 = getValue('angle2'), angle3 = getValue('angle3');

    const angle1Rad = angle1 * Math.PI / 180;
    const angle2Rad = angle2 * Math.PI / 180;
    const angle3Rad = angle3 * Math.PI / 180;

    const F1x = F1 * Math.cos(angle1Rad), F1y = F1 * Math.sin(angle1Rad);
    const F2x = F2 * Math.cos(angle2Rad), F2y = F2 * Math.sin(angle2Rad);
    const F3x = F3 * Math.cos(angle3Rad), F3y = F3 * Math.sin(angle3Rad);

    const EFx = F1x + F2x + F3x;
    const EFy = F1y + F2y + F3y;

    const resultantForce = Math.sqrt(EFx ** 2 + EFy ** 2);
    const direction = Math.atan2(EFy, EFx) * (180 / Math.PI);

    showResult('resultantForce', resultantForce.toFixed(2));
    showResult('resultantDirection', direction.toFixed(2));
});

// Scientific Converter
document.getElementById('convertScientificBtn').addEventListener('click', () => {
    const number = getValue('sciNumber');
    const conversionType = document.getElementById('sciType').value;

    if (conversionType === 'toScientific') {
        showResult('resultSci', number.toExponential(4));
    } else {
        // For conversion from scientific, the input is assumed to be already in exponential form.
        // Parsing the exponential string back to a number.
        showResult('resultSci', Number(number.toExponential(4)).toFixed(4));
    }
});

// Unit Converter
document.getElementById('convertUnitBtn').addEventListener('click', () => {
    const value = getValue('unitValue');
    const unitType = document.getElementById('unitType').value;
    let result = 0;

    switch (unitType) {
        // Existing conversions
        case 'metersToFeet': result = value * 3.28084; break;
        case 'feetToMeters': result = value / 3.28084; break;
        case 'kilometersToMiles': result = value * 0.621371; break;
        case 'milesToKilometers': result = value / 0.621371; break;
        case 'kgToPounds': result = value * 2.20462; break;
        case 'poundsToKg': result = value / 2.20462; break;
        case 'celsiusToFahrenheit': result = (value * 9 / 5) + 32; break;
        case 'fahrenheitToCelsius': result = (value - 32) * 5 / 9; break;

        // New conversions
        case 'newtonsToPounds': result = value * 0.224809; break;
        case 'poundsToNewtons': result = value / 0.224809; break;
        case 'joulesToCalories': result = value * 0.239006; break;
        case 'caloriesToJoules': result = value / 0.239006; break;
        case 'wattsToHorsepower': result = value * 0.00134102; break;
        case 'horsepowerToWatts': result = value / 0.00134102; break;
        case 'pascalsToPSI': result = value * 0.000145038; break;
        case 'psiToPascals': result = value / 0.000145038; break;
        case 'litersToGallons': result = value * 0.264172; break;
        case 'gallonsToLiters': result = value / 0.264172; break;
        case 'sqmToSqft': result = value * 10.7639; break;
        case 'sqftToSqm': result = value / 10.7639; break;
        case 'cubicMetersToCubicFeet': result = value * 35.3147; break;
        case 'cubicFeetToCubicMeters': result = value / 35.3147; break;
        case 'kmhToMs': result = value * 0.277778; break;
        case 'msToKmh': result = value / 0.277778; break;
        case 'atmospheresToPascals': result = value * 101325; break;
        case 'pascalsToAtmospheres': result = value / 101325; break;
    }

    showResult('resultUnit', result.toFixed(4));
});

// Rectangular Components Calculation
document.getElementById('calcVectorBtn').addEventListener('click', () => {
    const force = getValue('forceInput');
    const direction = getValue('directionInput');
    const directionRad = direction * Math.PI / 180;

    const Fx = force * Math.cos(directionRad);
    const Fy = force * Math.sin(directionRad);

    showResult('resultFx', Fx.toFixed(4));
    showResult('resultFy', Fy.toFixed(4));
});
document.getElementById('calcA+B').addEventListener('click', () => {
    const A = getValue('A');
    const B = getValue('B');
    const C = Math.sqrt(A ** 2 + B ** 2);
    showResult('resultA+B', C.toFixed(4));
});
// Logarithm Calculator
document.getElementById('calcLogBtn').addEventListener('click', () => {
    const base = getValue('logBase');
    const number = getValue('logNumber');

    // Input validation
    if (base <= 0 || base === 1 || number <= 0) {
        showResult('logResult', 'Invalid input');
        return;
    }

    const result = Math.log(number) / Math.log(base);
    showResult('logResult', result.toFixed(4));
});
// Hooke's Law Calculator
document.getElementById('calcHookeBtn').addEventListener('click', () => {
    const F = document.getElementById('hookeF').value;
    const k = document.getElementById('hookeK').value;
    const deltaL = document.getElementById('hookeDeltaL').value;

    // Count filled fields
    const knownValues = [F, k, deltaL].filter(x => x !== '').length;

    if (knownValues !== 2) {
        showResult('resultHooke', 'Please enter two values');
        return;
    }

    let result;
    try {
        if (F === '') {
            result = parseFloat(k) * parseFloat(deltaL);
            showResult('resultHooke', `Restoring Force (F) = ${result.toFixed(4)} N`);
        } else if (k === '') {
            result = parseFloat(F) / parseFloat(deltaL);
            showResult('resultHooke', `Spring Constant (k) = ${result.toFixed(4)} N/m`);
        } else {
            result = parseFloat(F) / parseFloat(k);
            showResult('resultHooke', `Change in Length (ΔL) = ${result.toFixed(4)} m`);
        }
    } catch (error) {
        showResult('resultHooke', 'Invalid input');
    }
});

// Quadratic Formula Solver
document.getElementById('calcQuadraticBtn').addEventListener('click', () => {
    const A = getValue('quadA');
    const B = getValue('quadB');
    const C = getValue('quadC');

    // Calculate Discriminant
    const discriminant = B ** 2 - 4 * A * C;

    if (discriminant < 0) {
        showResult('quadResult1', 'No Real Solution');
        showResult('quadResult2', '');
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const X1 = (-B + sqrtDiscriminant) / (2 * A);
        const X2 = (-B - sqrtDiscriminant) / (2 * A);

        showResult('quadResult1', X1.toFixed(4));
        showResult('quadResult2', X2.toFixed(4));
        showResult('quadstep', `(X${-X1}), (X${-X2})`);
    }
});
// Binary ↔ Decimal Conversion
document.getElementById('convertBinDecBtn').addEventListener('click', () => {
    const input = document.getElementById('conversionInput').value;
    const conversionType = document.getElementById('conversionType').value;
    let result;

    try {
        if (conversionType === 'binaryToDecimal') {
            if (!/^[01]+$/.test(input)) throw new Error('Invalid binary number');
            result = parseInt(input, 2);
        } else {
            const decimal = parseInt(input);
            if (isNaN(decimal)) throw new Error('Invalid decimal number');
            result = decimal.toString(2);
        }
        showResult('resultBinDec', result);
    } catch (error) {
        showResult('resultBinDec', error.message);
    }
});
// Mass, Weight, and Gravity Calculation
document.getElementById('calcMassWeightGravityBtn').addEventListener('click', () => {
    const mass = getValue('mass');
    const weight = getValue('weight');
    const gravity = getValue('gravity');

    let result;

    // Count filled fields
    const knownValues = [mass, weight, gravity].filter(x => x !== 0).length;

    if (knownValues !== 2) {
        showResult('resultMassWeightGravity', 'Please enter two values');
        return;
    }

    if (mass === 0) {
        // Calculate mass
        result = weight / gravity;
        showResult('resultMassWeightGravity', `Mass (m) = ${result.toFixed(4)} kg`);
    } else if (weight === 0) {
        // Calculate weight
        result = mass * gravity;
        showResult('resultMassWeightGravity', `Weight (W) = ${result.toFixed(4)} N`);
    } else {
        // Calculate gravity
        result = weight / mass;
        showResult('resultMassWeightGravity', `Gravity (g) = ${result.toFixed(4)} m/s²`);
    }
});

// Advanced Equation Solver Script
document.getElementById('eqType').addEventListener('change', function() {
    const type = this.value;
    document.querySelectorAll('.equation-inputs').forEach(el => el.style.display = 'none');
    document.getElementById(type + 'Inputs').style.display = 'block';
});

document.getElementById('solveBtn').addEventListener('click', () => {
    const type = document.getElementById('eqType').value;
    try {
        let result;
        switch(type) {
            case 'quadratic':
                result = solveQuadratic();
                break;
            case 'cubic':
                result = solveCubic();
                break;
            case 'cubicSpecial': // ADD THIS CASE
                result = solveCubicSpecial();
                break;
            case 'linear2':
                result = solveLinear2();
                break;
            case 'linear3':
                result = solveLinear3();
                break;
        }
        document.getElementById('equationResult').textContent = result;
    } catch (error) {
        document.getElementById('equationResult').textContent = error.message;
    }
});

function solveQuadratic() {
    const a = getValue('qa');
    const b = getValue('qb');
    const c = getValue('qc');
    const discriminant = b*b - 4*a*c;

    if (discriminant < 0) return 'No real solutions';
    const sqrtD = Math.sqrt(discriminant);
    const x1 = (-b + sqrtD)/(2*a);
    const x2 = (-b - sqrtD)/(2*a);
    return `X: ${x1.toFixed(3)}, ${x2.toFixed(3)}`;
}

function solveCubic() {
    const a = getValue('ca');
    const b = getValue('cb');
    const c = getValue('cc');
    const d = getValue('cd');

    // Using numerical method with multiple initial guesses
    const roots = [];
    for (let guess = -10; guess <= 10; guess++) {
        let x = guess;
        for (let i = 0; i < 50; i++) {
            const fx = a*x**3 + b*x**2 + c*x + d;
            const dfx = 3*a*x**2 + 2*b*x + c;
            if (dfx === 0) break;
            x = x - fx/dfx;
            if (Math.abs(fx) < 1e-6) {
                if (!roots.some(r => Math.abs(r - x) < 1e-4)) roots.push(Number(x.toFixed(3)));
                break;
            }
        }
    }
    return roots.length ? `Real roots: ${roots.join(', ')}` : 'No real roots found';
}

// Step 2: Add new solver function (place this AFTER solveCubic() function)
function solveCubicSpecial() {
    const a = getValue('csa');
    const b = getValue('csb');
    const c = getValue('csc');

    // Handle special cases
    if (a === 0) throw new Error('Not a cubic equation (a=0)');

    // Factor out X: X(aX² + bX + c) = 0
    const roots = [0]; // First root is always 0

    // Solve quadratic part
    const discriminant = b*b - 4*a*c;

    if (discriminant >= 0) {
        const sqrtD = Math.sqrt(discriminant);
        roots.push(
            (-b + sqrtD)/(2*a),
            (-b - sqrtD)/(2*a)
        );
    }

    return `X: ${roots.map(r => r.toFixed(3)).join(', ')}`;
}

function solveLinear2() {
    const a1 = getValue('a1');
    const b1 = getValue('b1');
    const c1 = getValue('c1');
    const a2 = getValue('a2');
    const b2 = getValue('b2');
    const c2 = getValue('c2');

    const det = a1*b2 - a2*b1;
    if (det === 0) throw new Error('No unique solution');
    return `X = ${((c1*b2 - c2*b1)/det).toFixed(3)}, Y = ${((a1*c2 - a2*c1)/det).toFixed(3)}`;
}

function solveLinear3() {
    const a1 = getValue('a1_3');
    const b1 = getValue('b1_3');
    const c1 = getValue('c1_3');
    const d1 = getValue('d1_3');
    const a2 = getValue('a2_3');
    const b2 = getValue('b2_3');
    const c2 = getValue('c2_3');
    const d2 = getValue('d2_3');
    const a3 = getValue('a3_3');
    const b3 = getValue('b3_3');
    const c3 = getValue('c3_3');
    const d3 = getValue('d3_3');

    const det = a1*(b2*c3 - b3*c2) - b1*(a2*c3 - a3*c2) + c1*(a2*b3 - a3*b2);
    if (det === 0) throw new Error('No unique solution');

    const detX = d1*(b2*c3 - b3*c2) - b1*(d2*c3 - d3*c2) + c1*(d2*b3 - d3*b2);
    const detY = a1*(d2*c3 - d3*c2) - d1*(a2*c3 - a3*c2) + c1*(a2*d3 - a3*d2);
    const detZ = a1*(b2*d3 - b3*d2) - b1*(a2*d3 - a3*d2) + d1*(a2*b3 - a3*b2);

    return `X = ${(detX/det).toFixed(3)}, Y = ${(detY/det).toFixed(3)}, Z = ${(detZ/det).toFixed(3)}`;
}
