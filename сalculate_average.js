function find_average(array) {
    if (array.length != 0) {
      const total = array.reduce((acc, c) => acc + c, 0);
      return total / array.length;
    }else {
      return 0
    }
}