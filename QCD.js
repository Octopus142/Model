class Quark {
    constructor(flavor, color) {
      this.flavor = flavor;
      this.color = color;
    }
  
    toString() {
      return `${this.flavor} quark (${this.color})`;
    }
  }
  
  class Gluon {
    constructor(color1, color2) {
      this.color1 = color1;
      this.color2 = color2;
    }
  
    toString() {
      return `Gluon (${this.color1}-${this.color2})`;
    }
  }
  
  class QCDSimulation {
    constructor() {
      this.quarks = [];
      this.gluons = [];
      this.colors = ['red', 'green', 'blue'];
      this.antiColors = ['anti-red', 'anti-green', 'anti-blue'];
    }
  
    createQuark(flavor) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const quark = new Quark(flavor, color);
      this.quarks.push(quark);
      return quark;
    }
  
    createGluon() {
      const color1 = this.colors[Math.floor(Math.random() * this.colors.length)];
      const color2 = this.antiColors[Math.floor(Math.random() * this.antiColors.length)];
      const gluon = new Gluon(color1, color2);
      this.gluons.push(gluon);
      return gluon;
    }
  
    simulateColorInteraction(quark1, quark2) {
      const gluon = this.createGluon();
      console.log(`${quark1} interacts with ${quark2} via ${gluon}`);
    }
  
    simulateConfinement() {
      const quark1 = this.createQuark('up');
      const quark2 = this.createQuark('down');
      const quark3 = this.createQuark('strange');
  
      console.log('Simulating confinement:');
      console.log(`Created: ${quark1}, ${quark2}, ${quark3}`);
      console.log('Quarks are confined and cannot be isolated. They form a colorless hadron.');
    }
  
    simulateAsymptoticFreedom(distance) {
      const strength = 1 / Math.log(distance);
      console.log(`\nSimulating asymptotic freedom:`);
      console.log(`At distance ${distance} units, the effective coupling strength is ${strength.toFixed(4)}`);
      console.log(`As distance decreases, the interaction strength approaches zero (asymptotic freedom).`);
    }
  
    run() {
      console.log('Quantum Chromodynamics (QCD) Simulation\n');
  
      console.log('1. Color Charge Interaction:');
      const quark1 = this.createQuark('up');
      const quark2 = this.createQuark('down');
      this.simulateColorInteraction(quark1, quark2);
  
      console.log('\n2. Confinement:');
      this.simulateConfinement();
  
      console.log('\n3. Asymptotic Freedom:');
      this.simulateAsymptoticFreedom(3);
      this.simulateAsymptoticFreedom(4);
      this.simulateAsymptoticFreedom(5);
    }
  }
  
  // Run the simulation
  const qcdSimulation = new QCDSimulation();
  qcdSimulation.run();