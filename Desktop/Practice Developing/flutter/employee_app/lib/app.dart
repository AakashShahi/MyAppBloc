import 'package:employee_app/view/employee_view.dart';
import 'package:flutter/material.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: EmployeeView(), debugShowCheckedModeBanner: false);
  }
}
