describe("App", () => {
  const clickButton = document.querySelector('#click-me')
  const counter = document.querySelector('#counter')
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {

      clickButton.click();
      expect(counter.innerHTML).toEqual('120')
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(clickButton.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(7)).toBe(5040)

    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-22)).toBe(1)
    })
  })

  describe("Computer", () => {
    const newcomputer = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(newcomputer.hardDriveSpace).toBe(512)
    })

    describe("installProgram", () => {
      const newcomputer = new Computer();

      beforeEach(function (done) {
        newcomputer.installProgram(400, function () {
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
        expect(newcomputer.hardDriveSpace).toBe(112)
        done()
      })


    })

    describe("installProgram", function () {
      const newcomputer = new Computer();

      beforeEach(function (done) {
        newcomputer.installProgram(700, function () {
          done();
        })
      })

      it("will not install the program if there is insufficient space", () => {

        expect(newcomputer.hardDriveSpace).toBe(512)
      })
    })


    describe("format", () => {
      const newcomputer = new Computer();
      it("resets the hard drive to 512, even after programs have been installed", () => {

        newcomputer.hardDriveSpace = 400
        newcomputer.format();
        expect(newcomputer.hardDriveSpace).toBe(512)
      });
    })

  })

})