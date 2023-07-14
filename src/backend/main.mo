actor {
  stable var user : Text = "";

  public func greet(name : Text) : async Text {
    user := name;
    return "Hello, " # name # "!";
  };

  public func getUser() : async Text {
    return user;
  };

};
