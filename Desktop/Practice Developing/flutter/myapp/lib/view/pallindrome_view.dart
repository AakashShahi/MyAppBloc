import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myapp/cubit/pallindrome_cubit.dart';

class PallindromeView extends StatelessWidget {
  const PallindromeView({super.key});

  @override
  Widget build(BuildContext context) {
    final numberController = TextEditingController();
    return Scaffold(
      appBar: AppBar(title: Text("Pallindrome View")),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            TextFormField(
              controller: numberController,
              decoration: InputDecoration(labelText: "Type number"),
            ),
            SizedBox(height: 80),
            ElevatedButton(
              onPressed: () {
                final number = numberController.text;
                context.read<PallindromeCubit>().checkPalindrome(number);
              },
              child: Text("Check"),
            ),
            BlocBuilder<PallindromeCubit, String>(
              builder: (context, state) {
                return Text(state, style: TextStyle(fontSize: 24));
              },
            ),
          ],
        ),
      ),
    );
  }
}
