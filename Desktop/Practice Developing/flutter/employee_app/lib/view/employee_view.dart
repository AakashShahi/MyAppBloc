import 'package:employee_app/model/employee.dart';
import 'package:employee_app/state/employee_state.dart';
import 'package:employee_app/view/employee_outview.dart';
import 'package:flutter/material.dart';

class EmployeeView extends StatefulWidget {
  const EmployeeView({super.key});

  @override
  State<EmployeeView> createState() => _EmployeeViewState();
}

class _EmployeeViewState extends State<EmployeeView> {
  final name = TextEditingController();
  final email = TextEditingController();
  final photoUrl =
      "https://i.pinimg.com/736x/8f/0c/81/8f0c8139d840dc28c0cbf745e4409e17.jpg";
  String? _role;
  final phone = TextEditingController();
  final mykey = GlobalKey<FormState>();
  List<String> roles = ["CEO", "Manager", "HR"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Employee View"),
        backgroundColor: Colors.blue,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: mykey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Enter Your Name",
                  border: OutlineInputBorder(),
                ),
                controller: name,
                validator:
                    (value) =>
                        value == null || value.isEmpty
                            ? "Enter your name"
                            : null,
              ),
              const SizedBox(height: 10),
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Enter your email",
                  border: OutlineInputBorder(),
                ),
                controller: email,
                validator:
                    (value) =>
                        value == null || value.isEmpty
                            ? "Enter your email"
                            : null,
              ),
              const SizedBox(height: 10),
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Enter your phone number",
                  border: OutlineInputBorder(),
                ),
                controller: phone,
                keyboardType: TextInputType.number,
                validator:
                    (value) =>
                        value == null || value.isEmpty
                            ? "Enter your phone number"
                            : null,
              ),
              const SizedBox(height: 10),
              DropdownButtonFormField<String>(
                decoration: const InputDecoration(
                  labelText: "Select Role",
                  border: OutlineInputBorder(),
                ),
                value: _role,
                items:
                    roles
                        .map(
                          (role) =>
                              DropdownMenuItem(value: role, child: Text(role)),
                        )
                        .toList(),
                onChanged: (value) {
                  setState(() {
                    _role = value;
                  });
                },
                validator:
                    (value) => value == null ? "Please select role" : null,
              ),
              const SizedBox(height: 10),
              ElevatedButton(
                onPressed: () {
                  if (mykey.currentState!.validate()) {
                    final employee = Employee(
                      name: name.text,
                      email: email.text,
                      role: _role!,
                      phoneNo: phone.text,
                      isFav: false,
                    );
                    setState(() {
                      EmployeeState.lstEmployee.add(employee);
                      name.clear();
                      email.clear();
                      phone.clear();
                      _role = null;
                    });
                  }
                },
                child: const Text("Submit"),
              ),
              const SizedBox(height: 10),
              Expanded(
                child:
                    EmployeeState.lstEmployee.isNotEmpty
                        ? ListView.builder(
                          itemCount: EmployeeState.lstEmployee.length,
                          itemBuilder: (context, index) {
                            final emp = EmployeeState.lstEmployee[index];
                            return Container(
                              color:
                                  (EmployeeState.lstEmployee[index].isFav)
                                      ? Colors.green
                                      : Colors.grey,
                              child: ListTile(
                                leading: Image.network(photoUrl),
                                title: Text("${emp.name} (${emp.email})"),
                                subtitle: Text(emp.role),
                                trailing: IconButton(
                                  icon: Icon(
                                    Icons.favorite,
                                    color:
                                        (EmployeeState.lstEmployee[index].isFav)
                                            ? Colors.red
                                            : Colors.black,
                                  ),
                                  onPressed: () {
                                    setState(() {
                                      EmployeeState.lstEmployee[index].isFav =
                                          !EmployeeState
                                              .lstEmployee[index]
                                              .isFav;
                                    });
                                  },
                                ),
                                onTap: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) {
                                        return EmployeeOutview(
                                          employee:
                                              EmployeeState.lstEmployee[index],
                                        );
                                      },
                                    ),
                                  );
                                },
                              ),
                            );
                          },
                        )
                        : const Center(child: Text("No data")),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
