timing_test(function() {
  at(0, function() {
    assert_styles(
      '.anim',
      [{'x':'100px','y':'300px','width':'100px'}]);
  }, "Autogenerated");
  at(0.3, function() {
    assert_styles(
      '.anim',
      [{'x':'190px','y':'270px','width':'52px'}]);
  }, "Autogenerated");
  at(0.6, function() {
    assert_styles(
      '.anim',
      [{'x':'280px','y':'240px','width':'26px'}]);
  }, "Autogenerated");
  at(0.8999999999999999, function() {
    assert_styles(
      '.anim',
      [{'x':'369.99999999999994px','y':'210px','width':'44px'}]);
  }, "Autogenerated");
  at(1.2, function() {
    assert_styles(
      '.anim',
      [{'x':'400px','y':'200px','width':'50px'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");
