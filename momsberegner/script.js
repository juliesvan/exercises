// Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

// Funktion med to parametre: beløb og moms (moms defeault er 25, og vil altid være det, medmindre det overskrives af en anden værdi, når man kalder funktionen.)
function momsBeregner(beloeb, moms = 25) {
  console.log(beloeb + (moms / 100) * beloeb);
}

// Funktionen bliver kaldet, her med 100 som beløb.
momsBeregner(100);
