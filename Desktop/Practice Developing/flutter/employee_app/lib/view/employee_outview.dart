import 'package:employee_app/model/employee.dart';
import 'package:flutter/material.dart';

class EmployeeOutview extends StatelessWidget {
  const EmployeeOutview({super.key, required this.employee});
  final Employee employee;

  @override
  Widget build(BuildContext context) {
    final url =
        "https://i.pinimg.com/736x/8f/0c/81/8f0c8139d840dc28c0cbf745e4409e17.jpg";
    return Scaffold(
      appBar: AppBar(
        title: Text("Employee profile"),
        backgroundColor: (employee.isFav) ? Colors.green : Colors.grey,
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(10),
          child: Column(
            children: [
              Image.network(url, height: 200, width: 200),
              SizedBox(height: 20),
              Text(
                "FirstName: ${employee.name}",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "Phone No: ${employee.phoneNo}",
                style: TextStyle(fontSize: 24),
              ),
              Text(
                "Role: ${employee.role}",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
              ),
              Text(
                employee.email,
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
