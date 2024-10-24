Imports color.css
Class Quark
    Public Name
    Public Charge
    Public ApproxMass
    
    Public Sub Init(name, charge, approxMass)
        Me.Name = name
        Me.Charge = charge
        Me.ApproxMass = approxMass
    End Sub
    
    Public Function GetInfo()
        GetInfo = "Quark: " & Me.Name & vbNewLine & _
                  "Charge: " & Me.Charge & " e" & vbNewLine & _
                  "Approximate Mass: " & Me.ApproxMass & " MeV/c^2" & vbNewLine
    End Function
End Class

Sub DescribeQuarks()
    Dim quarks(5)
    Set quarks(0) = New Quark
    quarks(0).Init "Up", 2/3, 2.2
    
    Set quarks(1) = New Quark
    quarks(1).Init "Down", -1/3, 4.7
    
    Set quarks(2) = New Quark
    quarks(2).Init "Charm", 2/3, 1280
    
    Set quarks(3) = New Quark
    quarks(3).Init "Strange", -1/3, 96
    
    Set quarks(4) = New Quark
    quarks(4).Init "Top", 2/3, 173100
    
    Set quarks(5) = New Quark
    quarks(5).Init "Bottom", -1/3, 4180
    
    WScript.Echo "The Six Quark Flavors:" & vbNewLine
    
    Dim quark
    For Each quark In quarks
        WScript.Echo quark.GetInfo()
    Next
    
    WScript.Echo "Note: Quark masses are approximate and can vary depending on the measurement method."
    WScript.Echo "Charges are given in units of elementary charge (e)."
    WScript.Echo "Masses are given in MeV/c^2 (mega-electron volts divided by speed of light squared)."
End Sub

DescribeQuarks()