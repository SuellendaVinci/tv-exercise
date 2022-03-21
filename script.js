// Enunciado:

// Construa uma classe para gerar um objeto TV com as propriedades canal, volume e
// ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

/*
        |-----------|
        |    TV     | => ENTIDADE
        | ----------|
       /             \
    PROPS           MÉTODOS
    canal           ligar()
    volume          desligar()
    ligada          mudaDeCanal()
                    aumentaVolume()
                    diminuiVolume()
*/

// modelo
class TV {
  // inicializa o objeto
  constructor(canal = canais, volume = 0, ligada = false) {
    this.canais = ["band", "sbt", "record", "cultura", "globo"];
    this.canal = this.canais[0];
    this.#volume = volume;
    this.ligada = ligada;
  }

  // props (públicas)
  //canal
  //ligada

  // props (privadas)
  #volume;

  // método getter
  get getVolume() {
    return this.#volume;
  }

  // método setter
  set setVolume(valor) {
    return (this.#volume = valor);
  }

  // métodos (públicos)
  ligar() {
    return (this.ligada = true);
  }

  desligar() {
    return (this.ligada = false);
  }

  mudaDeCanal() {
    let canalIndex = this.canais.indexOf(this.canal);
    if (this.ligada === true) {
      if (canalIndex === this.canais.length - 1) {
        this.canal = this.canais[0];
        return this.canal;
      }
      this.canal = this.canais[canalIndex + 1];
      return this.canal;
    } else {
      return "Não é possível mudar de canal com a TV desligada. Por favor, ligue sua TV.";
    }
  }

  aumentaVolume() {
    let volumeMax = 20;
    if (this.ligada === true) {
      if (this.#volume === volumeMax) {
        return (this.#volume = 20);
      } else {
        return (this.#volume += 1);
      }
    } else {
      return "Não é possível alterar o volume da tv desligada. Por favor, ligue sua TV.";
    }
  }

  diminuiVolume() {
    let volumeMin = 0;
    if (this.ligada === true) {
      if (this.#volume === volumeMin) {
        return (this.#volume = 0);
      } else {
        return (this.#volume -= 1);
      }
    } else {
      return "Não é possível alterar o volume da tv desligada. Por favor, ligue sua TV.";
    }
  }
}

// instancia => vai gerar o objeto
const samsung = new TV("sbt", 10, (ligada = false));
console.log(samsung);
