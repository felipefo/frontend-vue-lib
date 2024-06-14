import todoInput from "./Todo"
import userInput from "./User"

class FactoryDomain {

    static getDomainModel(model: string) {
        if(model.toLocaleLowerCase() == "user"){
            return userInput[0];
        }else if(model.toLocaleLowerCase() == "todo"){
            return todoInput[0];
        }
  }
}

export default FactoryDomain;
