class Artikel {
  static artikelCounter = 1

  constructor(name, index, menge = 1) {
    this.id = Artikel.artikelCounter++
    this.index = index
    this.name = name
    this.gekauft = false
    this.menge = menge
  }
}