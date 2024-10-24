namespace QED {
    // Enums
    export enum ParticleType {
      Electron,
      Positron,
      Photon
    }
  
    export enum InteractionType {
      Emission,
      Absorption,
      Scattering
    }
  
    // Interfaces
    export interface Particle {
      type: ParticleType;
      mass: number;
      charge: number;
      spin: number;
    }
  
    export interface Interaction {
      type: InteractionType;
      particles: Particle[];
    }
  
    // Particle definitions
    export const Electron: Particle = {
      type: ParticleType.Electron,
      mass: 0.511, // MeV/c^2
      charge: -1, // in units of elementary charge
      spin: 0.5
    };
  
    export const Positron: Particle = {
      type: ParticleType.Positron,
      mass: 0.511, // MeV/c^2
      charge: 1, // in units of elementary charge
      spin: 0.5
    };
  
    export const Photon: Particle = {
      type: ParticleType.Photon,
      mass: 0,
      charge: 0,
      spin: 1
    };
  
    // QED calculations
    export namespace Calculations {
      export function calculateCouplingConstant(energy: number): number {
        const alpha = 1 / 137.036; // Fine-structure constant
        return alpha / (1 - (alpha / (3 * Math.PI)) * Math.log(energy / 0.511));
      }
  
      export function calculateCrossSectionElectronPositron(energy: number): number {
        const alpha = calculateCouplingConstant(energy);
        const s = 4 * energy * energy; // Center-of-mass energy squared
        return (4 * Math.PI * alpha * alpha) / (3 * s) * 86.8e-30; // in m^2
      }
    }
  
    // QED simulations
    export namespace Simulations {
      export function simulateElectronPositronAnnihilation(): Interaction {
        return {
          type: InteractionType.Scattering,
          particles: [Electron, Positron, Photon, Photon]
        };
      }
  
      export function simulateComptonScattering(): Interaction {
        return {
          type: InteractionType.Scattering,
          particles: [Electron, Photon, Electron, Photon]
        };
      }
    }
  }
  
  // Usage example
  function demonstrateQED(): void {
    console.log("Quantum Electrodynamics (QED) Demonstration");
  
    // Particle properties
    console.log("\nParticle Properties:");
    console.log("Electron:", QED.Electron);
    console.log("Positron:", QED.Positron);
    console.log("Photon:", QED.Photon);
  
    // QED calculations
    console.log("\nQED Calculations:");
    const energy = 10; // GeV
    const couplingConstant = QED.Calculations.calculateCouplingConstant(energy);
    console.log(`Coupling constant at ${energy} GeV: ${couplingConstant.toExponential(4)}`);
  
    const crossSection = QED.Calculations.calculateCrossSectionElectronPositron(energy);
    console.log(`e+e- annihilation cross-section at ${energy} GeV: ${crossSection.toExponential(4)} m^2`);
  
    // QED simulations
    console.log("\nQED Simulations:");
    const annihilation = QED.Simulations.simulateElectronPositronAnnihilation();
    console.log("Electron-Positron Annihilation:", annihilation);
  
    const comptonScattering = QED.Simulations.simulateComptonScattering();
    console.log("Compton Scattering:", comptonScattering);
  }
  
  // Run the demonstration
  demonstrateQED();