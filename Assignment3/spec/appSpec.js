


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
     
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(7)).toBe(5040)
    })

    it("returns 1 if the provided number is less than 1 ", () => {

    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {

    })

    describe("installProgram", () => {
      it("can install a program if there is sufficient space", () => {

      })

      it("will not install the program if there is insufficient space", () => {

      })
    })

    describe("format", () => {
      it("resets the hard drive to 512, even after programs have been installed", () => {

      });
    })

  })

})