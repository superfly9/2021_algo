class treeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class insertNode {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new treeNode(data);

    // 루드가 설정되어 있지 않다면 루트를 node로 만들어 준다. node는 treeNode()에서 뼈대를 받아온다.
    if (!this.root) {
      this.root = node;
      return this;
    }

    // 비교를 위해 current 를 설정해 준다.
    let current = this.root;

    // current가 true 라면 while문을 돌면서 data와 지금 현재 data인 current data를 비교한다.
    while (current) {
      // 중복된 값은 어떤 결과를 리턴하지 않는다.
      if (data === current.data) {
        return;
      }
      // data가 current data(기준) 보다 작다면 왼쪽에 넣어준다.
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        // 이제 current data(기준)는 왼쪽의 data로 준다.
        current = current.left;
      }
      // data가 기준 data(current data) 보다 크다면 오른쪽에 넣어준다.
      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        // 이제 current data(기준)는 오른쪽 data로 준다.
        current = current.right;
      }
    }
  }
}

let nums = new insertNode();
nums.insert(10);
nums.insert(5);
nums.insert(11);
nums.insert(3);
nums.insert(6);

console.log(nums);
// insertNode {
//   root: treeNode {
//     data: 10,
//     left: treeNode { data: 5, left: 3, right: 6 },
//     right: 11
//   }
// }
