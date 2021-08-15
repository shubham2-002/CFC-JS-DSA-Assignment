let input = [
    ["O", "X", "O", "O"],
    ["O", "O", "O", "X"],
    ["X", "O", "X", "O"],
    ["X", "O", "O", "O"],
    ["X", "X", "O", "O"],
  ];
  let N = input.length;
  let M = input[0].length;
  let visited = new Array(N).fill().map(() => new Array(M).fill(0));
  visited[0][0] = 1;
  let answer = false;
  function solution(input, visited, Down, Right, n, m) {
    if (Down === n - 1 && Right === m - 1 && answer === false) {
      console.log(visited);
      answer = true;
      return;
    }
    if (Right + 1 <= m - 1 && visited[Down][Right + 1] === 0 && input[Down][Right + 1] === "O") {
      visited[Down][Right + 1] = 1;
      solution(input, visited, Down, Right + 1, n, m);
      visited[Down][Right + 1] = 0;
    }
    if (Down + 1 <= n - 1 && visited[Down + 1][Right] === 0 && input[Down + 1][Right] === "O") {
      visited[Down + 1][Right] = 1;
      solution(input, visited, Down + 1, Right, n, m);
      visited[Down + 1][Right] = 0;
    }
    return;
  }
  solution(input, visited, 0, 0, N, M);