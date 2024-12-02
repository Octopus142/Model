Imports System

Module Model
    Enum ParticleType
        Quark
        Lepton
        Boson
    End Enum

    Enum ForceType
        Strong
        Weak
        Electromagnetic
    End Enum

    Class Particle
        Public Name As String
        Public Type As ParticleType
        Public Charge As Double
        Public Mass As Double

        Public Sub New(name As String, type As ParticleType, charge As Double, mass As Double)
            Me.Name = name
            Me.Type = type
            Me.Charge = charge
            Me.Mass = mass
        End Sub

        Public Overrides Function ToString() As String
            Return $"{Name} (Type: {Type}, Charge: {Charge}, Mass: {Mass} GeV/c²)"
        End Function
    End Class

    Class Force
        Public Name As String
        Public Type As ForceType
        Public RelativeStrength As Double
        Public Range As String
        Public Mediator As Particle

        Public Sub New(name As String, type As ForceType, relativeStrength As Double, range As String, mediator As Particle)
            Me.Name = name
            Me.Type = type
            Me.RelativeStrength = relativeStrength
            Me.Range = range
            Me.Mediator = mediator
        End Sub

        Public Overrides Function ToString() As String
            Return $"{Name} Force (Type: {Type}, Relative Strength: {RelativeStrength}, Range: {Range}, Mediator: {Mediator.Name})"
        End Function
    End Class

    Class StandardModel
        Public Particles As New List(Of Particle)
        Public Forces As New List(Of Force)

        Public Sub New()
            InitializeParticles()
            InitializeForces()
        End Sub

        Private Sub InitializeParticles()
            ' Quarks
            Particles.Add(New Particle("Up", ParticleType.Quark, 2/3, 0.0022))
            Particles.Add(New Particle("Down", ParticleType.Quark, -1/3, 0.0047))
            Particles.Add(New Particle("Charm", ParticleType.Quark, 2/3, 1.28))
            Particles.Add(New Particle("Strange", ParticleType.Quark, -1/3, 0.096))
            Particles.Add(New Particle("Top", ParticleType.Quark, 2/3, 173.1))
            Particles.Add(New Particle("Bottom", ParticleType.Quark, -1/3, 4.18))

            ' Leptons
            Particles.Add(New Particle("Electron", ParticleType.Lepton, -1, 0.000511))
            Particles.Add(New Particle("Electron Neutrino", ParticleType.Lepton, 0, 0))
            Particles.Add(New Particle("Muon", ParticleType.Lepton, -1, 0.106))
            Particles.Add(New Particle("Muon Neutrino", ParticleType.Lepton, 0, 0))
            Particles.Add(New Particle("Tau", ParticleType.Lepton, -1, 1.78))
            Particles.Add(New Particle("Tau Neutrino", ParticleType.Lepton, 0, 0))

            ' Bosons
            Particles.Add(New Particle("Photon", ParticleType.Boson, 0, 0))
            Particles.Add(New Particle("Gluon", ParticleType.Boson, 0, 0))
            Particles.Add(New Particle("Z Boson", ParticleType.Boson, 0, 91.2))
            Particles.Add(New Particle("W Boson", ParticleType.Boson, 1, 80.4))
            Particles.Add(New Particle("Higgs Boson", ParticleType.Boson, 0, 125.1))
        End Sub

        Private Sub InitializeForces()
            Dim photon = Particles.Find(Function(p) p.Name = "Photon")
            Dim gluon = Particles.Find(Function(p) p.Name = "Gluon")
            Dim wBoson = Particles.Find(Function(p) p.Name = "W Boson")
            Dim zBoson = Particles.Find(Function(p) p.Name = "Z Boson")

            Forces.Add(New Force("Strong Nuclear", ForceType.Strong, 1, "10^-15 m", gluon))
            Forces.Add(New Force("Weak Nuclear", ForceType.Weak, 10^-6, "10^-18 m", wBoson))
            Forces.Add(New Force("Electromagnetic", ForceType.Electromagnetic, 1/137, "Infinite", photon))
        End Sub

        Public Sub DisplayInfo()
            Console.WriteLine("Standard Model of Particle Physics")
            Console.WriteLine("Fundamental Particles:")
            For Each particle In Particles
                Console.WriteLine(particle)
            Next
            Console.WriteLine()

            Console.WriteLine("Fundamental Forces:")
            For Each force In Forces
                Console.WriteLine(force)
            Next
        End Sub
    End Class

    Sub Main()
        Dim model As New StandardModel()
        model.DisplayInfo()

        Console.WriteLine("Press any key to exit...")
        Console.ReadKey()
    End Sub
End Module
