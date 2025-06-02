import 'package:flutter/material.dart';
import 'package:myapp/app.dart';
import 'package:myapp/service_locater/service_locater.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await initDependencies();
  runApp(const App());
}
