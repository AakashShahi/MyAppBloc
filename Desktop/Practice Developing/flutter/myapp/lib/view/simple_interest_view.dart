import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myapp/cubit/simple_interest_cubit.dart';

class SimpleInterestView extends StatelessWidget {
  const SimpleInterestView({super.key});

  @override
  Widget build(BuildContext context) {
    final myKey = GlobalKey<FormState>();
    final pController = TextEditingController();
    final tController = TextEditingController();
    final rController = TextEditingController();

    return Scaffold(
      appBar: AppBar(title: Text("Simple Interest View")),
      body: Form(
        key: myKey,
        child: Column(
          children: [
            TextFormField(
              decoration: InputDecoration(labelText: "Principle"),
              controller: pController,
            ),
            SizedBox(height: 10),
            TextFormField(
              decoration: InputDecoration(labelText: "Time"),
              controller: tController,
            ),
            SizedBox(height: 10),
            TextFormField(
              decoration: InputDecoration(labelText: "Rate"),
              controller: rController,
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: () {
                final p = double.parse(pController.text);
                final t = double.parse(tController.text);
                final r = double.parse(rController.text);
                context.read<SimpleInterestCubit>().calculateSimple(p, t, r);
              },
              child: Text("Calculate"),
            ),
            SizedBox(height: 20),
            BlocBuilder<SimpleInterestCubit, double>(
              builder: (context, state) {
                return Text(
                  "The simple interest is : $state",
                  style: TextStyle(fontSize: 24),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
