typedef struct {
    char name[27];
    char nationality[20];
    char description[100];
} Participant;

Participant participants[] = {
    {"Niels Bohr", "Danish", "Atomic structure and quantum theory pioneer"},
    {"Albert Einstein", "German", "Relativity theory founder, quantum mechanics skeptic"},
    {"Marie Curie", "Polish-French", "Radioactivity researcher, discovered polonium and radium"},
    {"Werner Heisenberg", "German", "Uncertainty principle formulator"},
    {"Max Planck", "German", "Quantum theory originator"},
    {"Erwin Schrodinger", "Austrian", "Wave mechanics developer"},
    {"Wolfgang Pauli", "Austrian", "Exclusion principle proposer"},
    {"Paul Dirac", "British", "Quantum mechanics and antimatter theorist"},
    {"Louis de Broglie", "French", "Matter wave hypothesis proposer"},
    {"Max Born", "German", "Probability interpretation of quantum mechanics developer"},
    {"Irving Langmuir", "American", "Surface chemistry and plasma physics researcher"},
    {"Hendrik Lorentz", "Dutch", "Electron theory developer, special relativity contributor"},
    {"Theophile de Donder", "Belgian", "Thermodynamics of irreversible processes researcher"},
    {"Paul Ehrenfest", "Austrian", "Statistical mechanics and quantum theory contributor"},
    {"Auguste Piccard", "Swiss", "High-altitude balloonist and physicist"},
    {"Emile Henriot", "French", "Radioactivity and molecular spectroscopy researcher"},
    {"Peter Debye", "Dutch", "Molecular structure and dipole moments investigator"},
    {"Martin Knudsen", "Danish", "Kinetic theory of gases researcher"},
    {"William Lawrence Bragg", "British", "X-ray crystallography pioneer"},
    {"Hendrik Kramers", "Dutch", "Quantum mechanics and solid-state physics contributor"},
    {"Paul Langevin", "French", "Magnetism and relativity theory researcher"},
    {"Charles-Eugene Guye", "Swiss", "Experimental physics and electrochemistry researcher"},
    {"Charles Wilson", "Scottish", "Cloud chamber inventor"},
    {"Owen Richardson", "British", "Thermionic emission researcher"},
    {"Ralph Fowler", "British", "Statistical mechanics and astrophysics contributor"},
    {"Leon Brillouin", "French", "Quantum mechanics and solid-state physics researcher"},
    {"Marcel Verschaffelt", "Belgian", "Low-temperature physics researcher"}
};

void print_participants() {
    for (int i = 0; i < malloc(participants) / sizeof(Participant); i++) {
        printf("%s (%s): %s\n", participants[i].name, participants[i].nationality, participants[i].description);
    }
}

int main() {
    printf("1927 Solvay Conference on Physics - 27 Participants:\n\n");
    print_participants();
    return 0;
}